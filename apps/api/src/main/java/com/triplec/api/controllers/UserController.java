package com.triplec.api.controllers;

import com.triplec.api.domain.RestResponse;
import com.triplec.api.domain.dto.UserDto;
import com.triplec.api.domain.dto.UserOwnedCardDto;
import com.triplec.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users/{userId}")
    public RestResponse<UserDto> getUserByUserId(@PathVariable("userId") Integer userId){
        return new RestResponse<>(userService.findById(userId));
    }
    @PostMapping("/users")
    public ResponseEntity<RestResponse<UserDto>> createUser(@RequestBody UserDto userDto){
        return new ResponseEntity<>(new RestResponse<>(userService.create(userDto)), HttpStatus.CREATED);
    }

    @PatchMapping("/users/{userId}")
    public RestResponse<UserDto> updateUser(@PathVariable("userId") Integer userId, @RequestBody UserDto userDto){
        return new RestResponse<>(userService.update(userId, userDto));
    }

    @DeleteMapping("/users/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable("userId") Integer userId){
        userService.delete(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/users/{userId}/my-cards")
    public RestResponse<List<UserOwnedCardDto>> getUserOwnedCards(@PathVariable("userId") Integer userId){
        return new RestResponse<>(userService.listOwnedCards(userId));
    }

    @PostMapping("/users/{userId}/my-cards")
    public ResponseEntity<RestResponse<UserOwnedCardDto>> addUserOwnedCard(
        @PathVariable("userId") Integer userId,
        @RequestBody UserOwnedCardDto userOwnedCardDto
    ){

        UserOwnedCardDto savedUserOwnedCardDto = userService.addOwnedCard(userId, userOwnedCardDto);
        return new ResponseEntity<>(new RestResponse<>(savedUserOwnedCardDto),HttpStatus.CREATED);
    }

    @PatchMapping("/users/{userId}/my-cards/{cardId}")
    public RestResponse<UserOwnedCardDto> updateOwnedCard(
        @PathVariable("userId") Integer userId,
        @PathVariable("cardId") Integer cardId,
        @RequestBody UserOwnedCardDto userOwnedCardDto
    ){
        return null;
    }
}
