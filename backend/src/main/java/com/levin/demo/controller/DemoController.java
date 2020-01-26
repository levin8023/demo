package com.levin.demo.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class DemoController {

    private final static Logger logger = LoggerFactory.getLogger(DemoController.class);

    @RequestMapping("/")
    public String hello() {
        return "home";

    }

    @ResponseBody
    @RequestMapping("/login")
    public String login(@RequestBody Map params) {
        logger.info("params:{}", params);
        return "login successfully";
    }

}