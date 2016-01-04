<?php 
   /*$_POST['name']       = 'Prasad';
   $_POST['contactno']  = '7894561230';
   $_POST['email']      = 'hardik.rabari@viitorcloud.com';
   $_POST['service']    = 'Plumbing';
   $_POST['area']       = 'ahmedabad';
   $_POST['date']		= '05/12/2015';
   $_POST['time']		= '06:15:00';*/
   $admin_email         = "jhalak.mehta@viitorcloud.com";
   $title               = "Uncle Den";
   $footer_url          = "";
   $year                = date("Y");
   $to 					= $admin_email ;
   $subject 			= "New Service Request";

  // print_r($_POST);exit;<p>Time    : {$_POST['service-time']}</p>
   $message = <<< HEREDOC
                  <!doctype html>
                     <html lang="en">
						<head>
							<meta charset="UTF-8">
                        </head>
						<body>
							<table align="center" cellpadding="0" cellspacing="0" style="display:block; margin:15px; width:578px">
								<tbody>
									<tr>
										<td><a href="" style="font:bold 25px Arial,sans-serif;color:#2f1703;text-decoration:none">UncleDen</a></td>
									</tr>
								</tbody>
							</table>
							<table align="center" cellpadding="0" cellspacing="0" style="display:block; width:678px">
								<tbody>
									<tr>
										<td><strong>Dear Admin,</strong></td>
									</tr>
									<tr>
										<td>
											<p>You have received new service request.</p>
											<p>Name    : {$_POST['full_name']}</p>
											<p>Contact : {$_POST['contact_no']}</p>
											<p>Email   : {$_POST['email_id']}</p>
											<p>Service : {$_POST['service_type']}</p>
											<p>Area    : {$_POST['area']}</p>
											<p>Date    : {$_POST['service_date']}</p>
											<p><img src = "{$_POST['imageData']}" alt="Service-image" /></p>
										</td>
									</tr>
									<tr>
										<td>
											<p>Thank you for using our service.</p>
										</td>
									</tr>
								</tbody>
							</table>
							<table align="center" cellpadding="0" cellspacing="0" style="display:block;" width="710">
								<tbody>
									<tr>
										<td style="font:bold 13px Arial,sans-serif;color:#2e1603" width="710">
											<p style="margin:15px 15px 15px">Regards,</p>
											<p style="display:block;margin:0px 15px 0px;color:#3e3e3e">{$title}</p>
											<p style="display:block;margin:0px 15px 0px;color:blue">{$admin_email}</p>
										</td>
									</tr>
									<tr>
										<td align="center" bgcolor="#ECECEC" style="color:#3e3e3e" width="710">
											<p style="display:block;margin:15px 0;font:normal 13px Arial,sans-serif"><a href="{$footer_url}" target="_blank">{$title}</a> &copy;{$year}</p>
										</td>
									</tr>
								</tbody>
							</table>
                          </body>
					</html>
HEREDOC
               ;  
//echo "$message";exit;

   $header = "From:jhalak.mehta@viitorcloud.com \r\n";
   //$header = "Cc:afgh@somedomain.com \r\n";
   $header .= "MIME-Version: 1.0\r\n";
   $header .= "Content-type: text/html\r\n";
   $retval = mail($to,$subject,$message,$header);
   if( $retval == true )
   {
      echo "Message sent successfully...";
   }
   else
   {
      echo "Message could not be sent...";
   }
	exit;
?>