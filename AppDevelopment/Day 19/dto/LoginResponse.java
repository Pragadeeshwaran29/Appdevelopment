package com.sandy.demo.dto;



import org.springframework.stereotype.Component;

import com.sandy.demo.enumerate.Role;

//import com.example.demo.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Component
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
	private String token;
	private Role role;
}