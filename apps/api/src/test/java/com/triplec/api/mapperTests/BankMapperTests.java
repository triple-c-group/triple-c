package com.triplec.api.mapperTests;

import com.triplec.api.domain.dto.BankDto;
import com.triplec.api.domain.entities.BankEntity;
import com.triplec.api.mappers.BankMapper;
import com.triplec.api.mappers.BankMapperImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.Assertions;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {BankMapperImpl.class, BankEntity.class, BankDto.class})
public class BankMapperTests {
    @Autowired
    private BankMapper bankMapper;

    @Test
    public void testThatBankMapperMapsEntityToDtoCorrectly() {
        BankEntity bankEntity = BankEntity.builder()
                .bankId("KBank")
                .bankName("Kasikorn Bank")
                .bankWebsite("www.kasikornbank.com")
                .build();
        BankDto bankDto = bankMapper.entityToDto(bankEntity);

        Assertions.assertEquals(bankEntity.getBankId(), bankDto.getBankId());
        Assertions.assertEquals(bankEntity.getBankName(), bankDto.getBankName());
        Assertions.assertEquals(bankEntity.getBankWebsite(), bankDto.getBankWebsite());

    }
}
