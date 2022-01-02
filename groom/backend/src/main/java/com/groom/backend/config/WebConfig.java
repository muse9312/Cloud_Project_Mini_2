package com.groom.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("Content-Type", "X-Auth-Token", "Authorization", "Access-Control-Allow-Origin",
                        "Access-Control-Allow-Credentials")
                .exposedHeaders("Content-Disposition", "X-Auth-Token", "Authorization", "Access-Control-Allow-Origin",
                        "Access-Control-Allow-Credentials")
                .allowCredentials(false).maxAge(3600);
    }

}
