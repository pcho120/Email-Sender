using System;
using System.Windows.Forms;
using System.Net;
using System.Net.Mail;
namespace EmailSender {
    public partial class MailForm : Form {
        public MailForm() {
            InitializeComponent();
        }

        private void closeBtn_Click(object sender, EventArgs e) {
            Application.Exit();
        }
        
        private void sendBtn_Click(object sender, EventArgs e) {
            SmtpClient Client = new SmtpClient() {

                Host = "smtp.outlook.office365.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                //UseDefaultCredentials = false,
                
                Credentials = new NetworkCredential() {
                UserName = "hcho2@rockets.utoledo.edu",
                Password = "##########"
                }
            };

            MailAddress FromEmail = new MailAddress("Hyunkun.Cho@rockets.utoledo.edu");
            MailAddress toEmail = new MailAddress(emailText.Text);
            MailMessage Message = new MailMessage() {
                From = FromEmail,
                Subject = subjectText.Text,
                Body = messageText.Text,
                };
            Message.To.Add(toEmail);
            try {
                Client.Send(Message);
                MessageBox.Show("Send successfully", "Done");
            } catch(Exception ex) {
                MessageBox.Show("Something wrong \n" + ex.Message, "error");
            }
        }
    }
}