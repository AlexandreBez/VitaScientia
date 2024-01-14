package com.vitascientia.factory;

import java.io.File;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;


// TODO: Auto-generated Javadoc
/**
 * A factory for creating Email objects.
 */
@Service
public class EmailFactory {

	/** The email sender. */
	@Autowired
	JavaMailSender emailSender;

	/** The environment. */
	@Autowired
	Environment environment;

	/**
	 * Gerador de email.
	 *
	 * @param para the para
	 * @param assunto the assunto
	 * @param corpo_email the corpo email
	 * @param arquivo the arquivo
	 * @param nome_arquivo the nome arquivo
	 * @throws MessagingException the messaging exception
	 */
	public void geradorDeEmail(String para, String assunto, String corpo_email, String arquivo, String nome_arquivo)
			throws MessagingException {

		MimeMessage mensagem = emailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mensagem, true);

		mimeMessageHelper.setFrom(environment.getProperty("spring.mail.username"));
		mimeMessageHelper.setTo(para);
		mimeMessageHelper.setSubject(assunto);
		mimeMessageHelper.setText(corpo_email, true);

		if (arquivo != null && !arquivo.isEmpty()) {
			FileSystemResource file = new FileSystemResource(new File(arquivo));
			if (nome_arquivo != null && !nome_arquivo.isEmpty()) {
				mimeMessageHelper.addAttachment(nome_arquivo, file);
			} else {
				mimeMessageHelper.addAttachment(file.getFilename(), file);
			}
		}

		emailSender.send(mensagem);
	}
}
