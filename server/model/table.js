let users =
	`create table if not exists users(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		name VARCHAR(100) COMMENT '用户昵称',
		email VARCHAR(50) NOT NULL COMMENT '邮箱',
		pass VARCHAR(50) NOT NULL COMMENT '密码',
		uid VARCHAR(20) NOT NULL COMMENT '唯一ID',
		phone VARCHAR(20) COMMENT '电话',
		sex VARCHAR(5) COMMENT '性别',
		education VARCHAR(6) COMMENT '学历',
		school VARCHAR(50) COMMENT '学校',
		register_time DATETIME COMMENT '注册时间',
		roles VARCHAR(20) NOT NULL DEFAULT 'user' COMMENT '用户类型',		
		PRIMARY KEY ( id )
	);`

let courses =
	`create table if not exists courses(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		name VARCHAR(20) NOT NULL COMMENT '课程名称',
		cover_url TEXT COMMENT '封面图片',
		summary VARCHAR(50) COMMENT '简介',
		description TEXT COMMENT '详细描述',
		time_arrange TEXT COMMENT '上课时间',
		status VARCHAR(20) NOT NULL COMMENT '状态',
		PRIMARY KEY ( id )
	);`

let user_courses =
	`create table if not exists user_courses(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		user_id INT UNSIGNED NOT NULL,
		course_id INT UNSIGNED NOT NULL,
		isStudent INT UNSIGNED DEFAULT 1,
		isTeacher INT UNSIGNED DEFAULT 0,
		PRIMARY KEY ( id ),
    FOREIGN KEY(user_id) REFERENCES users(id),
		FOREIGN KEY(course_id) REFERENCES courses(id)
	);`

module.exports = [users, courses,user_courses]