-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2019 at 02:56 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `glix_schools`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminlogin`
--

DROP TABLE IF EXISTS `adminlogin`;
CREATE TABLE IF NOT EXISTS `adminlogin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminlogin`
--

INSERT INTO `adminlogin` (`id`, `username`, `password`, `status`) VALUES
(1, 'alex', 'alex', 'admin'),
(2, 'admin', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `regno` varchar(20) NOT NULL,
  `status` varchar(15) NOT NULL,
  `photo` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `sex`, `regno`, `status`, `photo`) VALUES
(7, 'Harriyour', 'male', 'Alex', 'activate', 'register_all/Avatar2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `mst_admin`
--

DROP TABLE IF EXISTS `mst_admin`;
CREATE TABLE IF NOT EXISTS `mst_admin` (
  `loginid` varchar(20) DEFAULT NULL,
  `pass` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mst_admin`
--

INSERT INTO `mst_admin` (`loginid`, `pass`) VALUES
('mca', 'mca');

-- --------------------------------------------------------

--
-- Table structure for table `mst_question`
--

DROP TABLE IF EXISTS `mst_question`;
CREATE TABLE IF NOT EXISTS `mst_question` (
  `que_id` int(5) NOT NULL AUTO_INCREMENT,
  `test_id` int(5) DEFAULT NULL,
  `que_desc` varchar(150) DEFAULT NULL,
  `ans1` varchar(75) DEFAULT NULL,
  `ans2` varchar(75) DEFAULT NULL,
  `ans3` varchar(75) DEFAULT NULL,
  `ans4` varchar(75) DEFAULT NULL,
  `true_ans` int(1) DEFAULT NULL,
  PRIMARY KEY (`que_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mst_result`
--

DROP TABLE IF EXISTS `mst_result`;
CREATE TABLE IF NOT EXISTS `mst_result` (
  `login` varchar(20) DEFAULT NULL,
  `test_id` int(5) DEFAULT NULL,
  `test_date` date DEFAULT NULL,
  `score` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mst_result`
--

INSERT INTO `mst_result` (`login`, `test_id`, `test_date`, `score`) VALUES
('10', 1, NULL, 12),
('22', 2, '2012-03-22', 3),
('23', 2, '0000-00-00', 1),
('24', 2, '2002-04-07', 0);

-- --------------------------------------------------------

--
-- Table structure for table `mst_subject`
--

DROP TABLE IF EXISTS `mst_subject`;
CREATE TABLE IF NOT EXISTS `mst_subject` (
  `sub_id` int(5) NOT NULL AUTO_INCREMENT,
  `sub_name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`sub_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mst_subject`
--

INSERT INTO `mst_subject` (`sub_id`, `sub_name`) VALUES
(1, ' 2015/2016 Post UTM'),
(6, 'English'),
(7, 'Mathematics'),
(8, 'Biology');

-- --------------------------------------------------------

--
-- Table structure for table `mst_test`
--

DROP TABLE IF EXISTS `mst_test`;
CREATE TABLE IF NOT EXISTS `mst_test` (
  `test_id` int(5) NOT NULL AUTO_INCREMENT,
  `sub_id` int(5) DEFAULT NULL,
  `test_name` varchar(30) DEFAULT NULL,
  `total_que` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`test_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mst_test`
--

INSERT INTO `mst_test` (`test_id`, `sub_id`, `test_name`, `total_que`) VALUES
(1, 1, 'Science Department', '25'),
(2, 1, 'Art Department', '25'),
(3, 1, 'Commercial Department', '25');

-- --------------------------------------------------------

--
-- Table structure for table `mst_user`
--

DROP TABLE IF EXISTS `mst_user`;
CREATE TABLE IF NOT EXISTS `mst_user` (
  `user_id` int(5) NOT NULL AUTO_INCREMENT,
  `login` varchar(20) DEFAULT NULL,
  `pass` varchar(20) DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `city` varchar(15) DEFAULT NULL,
  `phone` int(10) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mst_user`
--

INSERT INTO `mst_user` (`user_id`, `login`, `pass`, `username`, `address`, `city`, `phone`, `email`) VALUES
(1, 'raj', 'raj', 'Rajen', 'limbdi', 'limbdi', 9999, 'alexx@yahoo.com');

-- --------------------------------------------------------

--
-- Table structure for table `mst_useranswer`
--

DROP TABLE IF EXISTS `mst_useranswer`;
CREATE TABLE IF NOT EXISTS `mst_useranswer` (
  `sess_id` varchar(80) DEFAULT NULL,
  `test_id` int(11) DEFAULT NULL,
  `que_des` varchar(200) DEFAULT NULL,
  `ans1` varchar(50) DEFAULT NULL,
  `ans2` varchar(50) DEFAULT NULL,
  `ans3` varchar(50) DEFAULT NULL,
  `ans4` varchar(50) DEFAULT NULL,
  `true_ans` int(11) DEFAULT NULL,
  `your_ans` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mst_useranswer`
--

INSERT INTO `mst_useranswer` (`sess_id`, `test_id`, `que_des`, `ans1`, `ans2`, `ans3`, `ans4`, `true_ans`, `your_ans`) VALUES
('2e36uaa237tlm9gprim504pfc4', 2, 'kkm', 'm', 'm', 'answer', 'm', 3, 3),
('2e36uaa237tlm9gprim504pfc4', 2, 'qh', 'h', 'h', 'h', 'answer', 4, 4),
('2e36uaa237tlm9gprim504pfc4', 2, 'gh', 'gh', 'answer', 'gh', 'gh', 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `new`
--

DROP TABLE IF EXISTS `new`;
CREATE TABLE IF NOT EXISTS `new` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote` varchar(2000) NOT NULL,
  `by` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `new`
--

INSERT INTO `new` (`id`, `quote`, `by`) VALUES
(1, 'today bis gofodj hdbhmhdkhdk', 'femi');

-- --------------------------------------------------------

--
-- Table structure for table `pintest`
--

DROP TABLE IF EXISTS `pintest`;
CREATE TABLE IF NOT EXISTS `pintest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pin` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pintest`
--

INSERT INTO `pintest` (`id`, `pin`) VALUES
(1, '2016706<br>');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `que_id` int(5) NOT NULL AUTO_INCREMENT,
  `test_id` int(5) NOT NULL,
  `que_desc` varchar(150) NOT NULL,
  `studentid` int(5) NOT NULL,
  `ans1` varchar(75) NOT NULL,
  `ans2` varchar(75) NOT NULL,
  `ans3` varchar(75) NOT NULL,
  `ans4` varchar(75) NOT NULL,
  `true_ans` varchar(1) NOT NULL,
  PRIMARY KEY (`que_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`que_id`, `test_id`, `que_desc`, `studentid`, `ans1`, `ans2`, `ans3`, `ans4`, `true_ans`) VALUES
(10, 1, 'Which Programming Language is PHP', 2, 'Server Side', 'Desktop', 'Mobile', 'Machine', '1'),
(9, 1, 'Inc Folder Stands for what', 2, 'Intern', 'Intact', 'Initiate', 'Include', '4'),
(5, 2, 'What is Sublime Editor', 23, 'MS WORD Editor', 'Text Editor', 'Editor for Adobe', 'I don\'t know', '2'),
(6, 2, 'Who created PHP', 23, 'Pat Hubie', 'Non of the above', 'Me', 'W3Schools', '2');

-- --------------------------------------------------------

--
-- Table structure for table `regcode`
--

DROP TABLE IF EXISTS `regcode`;
CREATE TABLE IF NOT EXISTS `regcode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=141 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `regcode`
--

INSERT INTO `regcode` (`id`, `code`, `status`) VALUES
(1, '2016146', 'used'),
(2, '2016275', 'used'),
(3, '2016413', 'used'),
(4, '2016572', 'used'),
(5, '2016825', 'used'),
(6, '2016750', 'used'),
(7, '2016985', 'used'),
(8, '2016706', 'used'),
(9, '2016581', 'used'),
(10, '2016535', 'used'),
(60, '2016493', 'used'),
(59, '2016912', 'used'),
(58, '2016616', 'used'),
(57, '2016191', 'used'),
(36, '2016254', 'used'),
(37, '2016522', 'used'),
(63, '2016446', 'unused'),
(64, '2016790', 'unused'),
(65, '2016461', 'unused'),
(66, '2016866', 'unused'),
(67, '2016308', 'unused'),
(68, '2016916', 'unused'),
(69, '2016350', 'unused'),
(70, '2016812', 'unused'),
(71, '2016809', 'unused'),
(72, '2016394', 'unused'),
(73, '2016639', 'unused'),
(74, '2016152', 'unused'),
(75, '2016907', 'unused'),
(76, '2016995', 'unused'),
(77, '2016961', 'unused'),
(78, '2016432', 'unused'),
(79, '2016911', 'unused'),
(80, '2016441', 'unused'),
(81, '2016501', 'unused'),
(82, '2016949', 'unused'),
(83, '2016682', 'unused'),
(84, '2016504', 'unused'),
(85, '2016693', 'unused'),
(86, '2016551', 'unused'),
(87, '2016529', 'unused'),
(88, '2016707', 'unused'),
(89, '2016721', 'unused'),
(90, '2016334', 'unused'),
(91, '2016310', 'unused'),
(92, '2016119', 'unused'),
(93, '2016221', 'unused'),
(94, '2016945', 'unused'),
(95, '2016336', 'unused'),
(96, '2016965', 'unused'),
(97, '2016175', 'unused'),
(98, '2016780', 'unused'),
(99, '2016466', 'unused'),
(100, '2016515', 'unused'),
(101, '2016997', 'unused'),
(102, '2016893', 'unused'),
(103, '2016217', 'unused'),
(104, '2016942', 'unused'),
(105, '2016967', 'unused'),
(106, '2016653', 'unused'),
(107, '2016207', 'unused'),
(108, '2016655', 'unused'),
(109, '2016830', 'unused'),
(110, '2016425', 'unused'),
(111, '2016639', 'unused'),
(112, '2016760', 'unused'),
(113, '2016221', 'unused'),
(114, '2016856', 'unused'),
(115, '2016922', 'unused'),
(116, '2016779', 'unused'),
(117, '2016123', 'unused'),
(118, '2016344', 'unused'),
(119, '2016914', 'unused'),
(120, '2016684', 'unused'),
(121, '2016170', 'unused'),
(122, '2016434', 'unused'),
(123, '2016926', 'unused'),
(124, '2016897', 'unused'),
(125, '2016448', 'unused'),
(126, '2016424', 'unused'),
(127, '2016816', 'unused'),
(128, '2016489', 'unused'),
(129, '2016591', 'unused'),
(130, '2016961', 'unused'),
(131, '2016895', 'unused'),
(132, '2016783', 'unused'),
(133, '2016683', 'unused'),
(134, '2016442', 'unused'),
(135, '2016121', 'unused'),
(136, '2016849', 'unused'),
(137, '2016358', 'unused'),
(138, '2016413', 'unused'),
(139, '2016604', 'unused'),
(140, '2016211', 'unused');

-- --------------------------------------------------------

--
-- Table structure for table `studentreg`
--

DROP TABLE IF EXISTS `studentreg`;
CREATE TABLE IF NOT EXISTS `studentreg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `surname` varchar(30) NOT NULL,
  `othernames` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `religion` varchar(30) NOT NULL,
  `bday` varchar(30) NOT NULL,
  `state` varchar(30) NOT NULL,
  `LGA` varchar(50) NOT NULL,
  `nationality` varchar(30) NOT NULL,
  `email` varchar(70) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` varchar(150) NOT NULL,
  `school` varchar(70) NOT NULL,
  `faculty` varchar(70) NOT NULL,
  `course` varchar(70) NOT NULL,
  `level` varchar(50) NOT NULL,
  `jamb` varchar(30) NOT NULL,
  `sub1` varchar(50) NOT NULL,
  `grade1` int(5) NOT NULL,
  `sub2` varchar(50) NOT NULL,
  `grade2` int(5) NOT NULL,
  `sub3` varchar(50) NOT NULL,
  `grade3` int(5) NOT NULL,
  `sub4` varchar(50) NOT NULL,
  `grade4` int(5) NOT NULL,
  `total` int(5) NOT NULL,
  `appno` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `time` varchar(50) NOT NULL,
  `status` varchar(100) NOT NULL,
  `examdate` varchar(200) NOT NULL,
  `photo` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `studentreg`
--

INSERT INTO `studentreg` (`id`, `surname`, `othernames`, `gender`, `religion`, `bday`, `state`, `LGA`, `nationality`, `email`, `phone`, `address`, `school`, `faculty`, `course`, `level`, `jamb`, `sub1`, `grade1`, `sub2`, `grade2`, `sub3`, `grade3`, `sub4`, `grade4`, `total`, `appno`, `date`, `time`, `status`, `examdate`, `photo`) VALUES
(1, 'Harriyour', 'Alex', 'Male', 'Christian', 'Fri 18 Sep 2015 08 : 22 : 14PM', 'Lagos State', 'Lagos Island', 'Nigeria', 'lxndrbrain@gmail.com', 'fghjkl', 'gfd', ' Schools', 'Faculty of Applied Science', 'Course...', 'Science Class', '55433A22WSXZ', 'English Language', 1, 'English Language', 5, 'Economics', 7, 'Economics', 6, 19, '2016191', 'Fri 18 Sep 2015 08 : 22 : 14PM', 'inactive', 'undone', 'Admission processing in progress...', 'student_pic/Jellyfish.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `timer`
--

DROP TABLE IF EXISTS `timer`;
CREATE TABLE IF NOT EXISTS `timer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studentid` int(50) NOT NULL,
  `timer` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `timer`
--

INSERT INTO `timer` (`id`, `studentid`, `timer`) VALUES
(1, 15, '14:27:21'),
(2, 16, '14:32:13'),
(3, 17, '14:36:06'),
(4, 18, '14:41:00'),
(5, 19, '14:47:51'),
(6, 10, '14:58:13'),
(7, 20, '15:01:30'),
(8, 21, '15:06:30'),
(9, 23, '00:00:20'),
(10, 22, '00:02:21'),
(11, 24, '14:03:29');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
