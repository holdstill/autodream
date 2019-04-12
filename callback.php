<?php
	if (isset($_POST['submit'])) {
		$name = $_POST['name'];
		$subject = 'AutoDream - Новое сообщение';
		$phone = $_POST['phone'];
		$message = $_POST['message'];

		$mailTo - "oleg.khudzin@gmail.com";
		$headers = "От: ".$name;
		$txt = "Вы получили новое сообщение на сайте AutoDream от ".$name.".\n\n".$message".\n\n".$phone;

		mail($mailTo, $subject, $txt, $headers);
		header("Location: index.html?mailsend")
	}
?>