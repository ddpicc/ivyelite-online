let users =
	`create table if not exists users(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		name VARCHAR(100) COMMENT '用户昵称',
		email VARCHAR(50) NOT NULL COMMENT '邮箱',
		pass VARCHAR(50) NOT NULL COMMENT '密码',
		uid INT UNSIGNED NOT NULL UNIQUE COMMENT '8位数唯一ID',
		phone VARCHAR(20) COMMENT '电话',
		sex VARCHAR(5) COMMENT '性别',
		education VARCHAR(6) COMMENT '学历',
		school VARCHAR(50) COMMENT '学校',
		birth DATE COMMENT '生日',
		language VARCHAR(5) COMMENT '语言',
		register_time BIGINT COMMENT '注册时间timestamp',
		roles VARCHAR(20) NOT NULL DEFAULT 'student' COMMENT '用户类型',
		avatar_url VARCHAR(50) DEFAULT 'FuObl8yKxcftADmihsFi-tRLWW_O',
		is_active VARCHAR(2) NOT NULL DEFAULT '否' COMMENT '账号是否激活',
		PRIMARY KEY ( id )
	);`

let courses =
	`create table if not exists courses(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		name VARCHAR(20) NOT NULL COMMENT '课程名称',
		cover_url TEXT COMMENT '封面图片',
		banner_url TEXT COMMENT '封面图片',
		summary VARCHAR(50) COMMENT '简介',
		description TEXT COMMENT '详细描述',
		type VARCHAR(20) NOT NULL COMMENT '类型',
		PRIMARY KEY ( id )
	);`


let classes =
	`create table if not exists classes(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		name VARCHAR(20) NOT NULL COMMENT '课堂名称',
		classCount VARCHAR(50) COMMENT '班级人数',
		time_arrange TEXT COMMENT '上课时间',
		status VARCHAR(20) NOT NULL COMMENT '状态',
		course_id INT UNSIGNED NOT NULL,
		comment TEXT COMMENT '备注',
		stripe_api_id TEXT COMMENT 'Stripe支付api id',
		amount FLOAT COMMENT '售价', 
		PRIMARY KEY ( id )
	);`

let user_class =
	`create table if not exists user_class(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		user_uid INT UNSIGNED NOT NULL,
		class_id INT UNSIGNED NOT NULL,
		isStudent INT UNSIGNED DEFAULT 1,
		isTeacher INT UNSIGNED DEFAULT 0,
		PRIMARY KEY ( id ),
    FOREIGN KEY(user_uid) REFERENCES users(uid),
		FOREIGN KEY(class_id) REFERENCES classes(id)
	);`

	let room =
	`create table if not exists room(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		course_id INT UNSIGNED NOT NULL,
		subject TEXT NOT NULL COMMENT '房间主题',
		room_id INT UNSIGNED NOT NULL,
		begin_timestamp BIGINT,
		room_type INT NOT NULL DEFAULT 1,
		password VARCHAR(30),
		status VARCHAR(20),
		PRIMARY KEY ( id )
	);`

	let receipt =
	`create table if not exists receipt(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		class_id INT UNSIGNED NOT NULL,
		user_uid INT UNSIGNED NOT NULL,
		create_timestamp BIGINT,
		amount FLOAT COMMENT '价钱', 
		PRIMARY KEY ( id )
	);`

	let user_comment =
	`create table if not exists user_comment(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		user_name VARCHAR(20),
		comment TEXT COMMENT '封面图片',
		course_id INT UNSIGNED NOT NULL,
		PRIMARY KEY ( id )
	);`

module.exports = [users,courses,classes,user_class,room,receipt,user_comment]