package com.virtualcampus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class VirtualCampusApplication {

    public static void main(String[] args) {
        SpringApplication.run(VirtualCampusApplication.class, args);
    }
}
