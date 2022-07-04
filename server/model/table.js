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
		PRIMARY KEY ( id )
	);`

	let courses =
	`create table if not exists courses(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		name VARCHAR(20) NOT NULL COMMENT '课程名称',
		PRIMARY KEY ( id )
	);`

	let classes =
	`create table if not exists classes(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		name VARCHAR(20) NOT NULL COMMENT '课堂名称',
		available_seat INT UNSIGNED COMMENT '班级人数',
		date_range VARCHAR(20) COMMENT '日期安排',
		time_range VARCHAR(20) COMMENT '时间安排',
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
		class_id INT UNSIGNED NOT NULL,
		subject TEXT NOT NULL COMMENT '房间主题',
		room_id VARCHAR(30) NOT NULL,
		password VARCHAR(30),
		status VARCHAR(30),
		PRIMARY KEY ( id )
	);`

	let receipt =
	`create table if not exists receipt(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		class_id INT UNSIGNED NOT NULL,
		user_uid INT UNSIGNED NOT NULL,
		create_timestamp BIGINT,
		amount FLOAT COMMENT '价钱',
		processed INT UNSIGNED NOT NULL DEFAULT 1 COMMENT '是否是1v1课程1v1课程需要人工处理',
		PRIMARY KEY ( id )
	);`

	let collect_info =
	`create table if not exists collect_info(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		user_name VARCHAR(20),
		wechat TEXT COMMENT '微信号',
		user_email VARCHAR(50) NOT NULL COMMENT '邮箱',
		class_id INT UNSIGNED,
		user_uid INT UNSIGNED,
		origin TEXT COMMENT '来源',
		PRIMARY KEY ( id )
	);`

	let config =
	`create table if not exists config(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		contact_phone VARCHAR(20) COMMENT '电话',
		contact_wechat TEXT COMMENT '微信号',
		contact_email VARCHAR(50) COMMENT '邮箱',
		qr_code TEXT COMMENT '二维码图片路径',
		PRIMARY KEY ( id )
	);`

	let completion_question =
	`create table if not exists completion_question(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		type VARCHAR(10) NOT NULL COMMENT '类型',
		question TEXT NOT NULL COMMENT '问题题干',
		o1 TEXT COMMENT 'option1',
		o2 TEXT COMMENT 'option2',
		o3 TEXT COMMENT 'option3',
		o4 TEXT COMMENT 'option4',
		o5 TEXT COMMENT 'option5',
		o6 TEXT COMMENT 'option6',
		o7 TEXT COMMENT 'option7',
		o8 TEXT COMMENT 'option8',
		o9 TEXT COMMENT 'option9',
		a1 TEXT COMMENT 'answer1',
		a2 TEXT COMMENT 'answer2',
		a3 TEXT COMMENT 'answer3',
		PRIMARY KEY ( id )
	);`
	let info_page = 
	`create table if not exists info_page(
		id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		content TEXT NOT NULL COMMENT '页面内容html格式',
		comment VARCHAR(20) COMMENT '备注',
		PRIMARY KEY ( id )
	);`


module.exports = [users,courses,classes,user_class,room,receipt,collect_info,config,info_page]