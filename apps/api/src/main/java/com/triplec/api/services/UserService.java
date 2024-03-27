package com.triplec.api.services;

import com.triplec.api.domain.dto.CreditCardDto;
import com.triplec.api.domain.dto.UserDto;
import com.triplec.api.domain.dto.UserOwnedCardDto;
import com.triplec.api.domain.entities.UserEntity;
import com.triplec.api.domain.entities.UserOwnedCardEntity;
import com.triplec.api.domain.entities.publicKeys.UserOwnedCardId;
import com.triplec.api.mappers.UserMapper;
import com.triplec.api.mappers.UserOwnedCardMapper;
import com.triplec.api.repositories.UserOwnedCardRepository;
import com.triplec.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserOwnedCardRepository userOwnedCardRepository;

    @Autowired
    private CreditCardService creditCardService;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UserOwnedCardMapper userOwnedCardMapper;

    public UserDto findById(Integer userId){
        return userRepository.findById(userId).map(userMapper::entityToDto).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }

    public UserDto create(UserDto userDto){
        if (userDto.getLineId() == null || userDto.getEmail() == null || userDto.getPhoneNumber() == null || userDto.getProfilePictureUrl() == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Request body does not have all required fields");
        }
        UserEntity userEntity = userMapper.DtoToEntity(userDto);
        return userMapper.entityToDto(userRepository.save(userEntity));
    }

    public UserDto update(Integer userId, UserDto userDto){
        UserEntity user = userRepository.findById(userId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        if (userDto == null){
            return userMapper.entityToDto(user);
        }

        String lineId = userDto.getLineId();
        String email = userDto.getEmail();
        String phoneNumber = userDto.getPhoneNumber();
        String profilePictureUrl = userDto.getProfilePictureUrl();

        if (lineId != null) {
            user.setLineId(lineId);
        }
        if (email != null) {
            user.setEmail(email);
        }
        if (phoneNumber != null){
            user.setPhoneNumber(phoneNumber);
        }
        if (profilePictureUrl != null){
            user.setProfilePictureUrl(profilePictureUrl);
        }

        return userMapper.entityToDto(userRepository.save(user));
    }

    public void delete(Integer userId){
        UserEntity user = userRepository.findById(userId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        userRepository.delete(user);
    }

    public List<UserOwnedCardDto> listOwnedCards(Integer userId){
        UserEntity user = userRepository.findById(userId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        return userOwnedCardMapper.entitiesToDtos(user.getOwnedCards());
    }

    public UserOwnedCardDto addOwnedCard(Integer userId, UserOwnedCardDto userOwnedCardDto){
        if (!userRepository.existsById(userId)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        if (userOwnedCardDto.getCard() == null || userOwnedCardDto.getAcceptPromotionNotification() == null || userOwnedCardDto.getAcceptDueDateNotification() == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Request body does not have all required fields");
        }
        Integer cardId = userOwnedCardDto.getCard().getCardId();
        if (cardId == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Credit card id cannot be null");
        }
        if (!creditCardService.exists(cardId)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This credit card id does not exist in the database");
        }
        UserOwnedCardId userOwnedCardId = new UserOwnedCardId(userId,cardId);
        if (userOwnedCardRepository.existsById(userOwnedCardId)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This credit card is already owned by this user");
        }
        UserOwnedCardEntity userOwnedCardEntity = userOwnedCardMapper.DtoToEntity(userOwnedCardDto);
        userOwnedCardEntity.setUser(UserEntity.builder().userId(userId).build());
        return userOwnedCardMapper.entityToDto(userOwnedCardRepository.save(userOwnedCardEntity));
    }

    public UserOwnedCardDto updateOwnedCard(Integer userId, Integer cardId, UserOwnedCardDto userOwnedCardDto){
        if (!userRepository.existsById(userId)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        UserOwnedCardId userOwnedCardId = new UserOwnedCardId(userId, cardId);

        UserOwnedCardEntity userOwnedCardEntity = userOwnedCardRepository.findById(userOwnedCardId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "There is no credit card with this id owned by this user"));

        String cardNickname = userOwnedCardDto.getCardNickname();
        Byte rating = userOwnedCardDto.getRating();
        String comment = userOwnedCardDto.getComment();
        LocalDate paymentDueDate = userOwnedCardDto.getPaymentDueDate();
        Boolean acceptPromotionNotification = userOwnedCardDto.getAcceptPromotionNotification();
        Boolean acceptDueDateNotification = userOwnedCardDto.getAcceptDueDateNotification();

        return null;
    }
}

