package com.vitascientia.email;

import java.io.File;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

/**
 * Classe EmailFactory para auxiliar no envio de emails
 * @author Lucas Alexandre
 * @since 1.0.0
 */
@Service
public class EmailFactory {

	/** Injeta a class emailSender*/
	@Autowired
	JavaMailSender emailSender;

	/** Injeta a class environment*/
	@Autowired
	Environment environment;

	/**
	 * Funcao que auxilia no envio de email
	 * Quando chamado antes de enviar, a funcao ira validar se existe algum arquivo anexado
	 * para assim saber como enviar a mensagem(Com anexo/Sem anexo)
	 * @param to 
	 * @param subject
	 * @param text
	 * @param pathToAttachment
	 * @param fileName
	 * @throws MessagingException
	 */
	public void emailNoReplyGenerator(String to, String subject, String text, String pathToAttachment, String fileName)
			throws MessagingException {

		MimeMessage message = emailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true);

		helper.setFrom(environment.getProperty("spring.mail.username"));
		helper.setTo(to);
		helper.setSubject(subject);
		helper.setText(text, true);

		if (pathToAttachment != null && !pathToAttachment.isEmpty()) {
			FileSystemResource file = new FileSystemResource(new File(pathToAttachment));
			if (fileName != null && !fileName.isEmpty()) {
				helper.addAttachment(fileName, file);
			} else {
				helper.addAttachment(file.getFilename(), file);
			}
		}

		emailSender.send(message);
	}
}
