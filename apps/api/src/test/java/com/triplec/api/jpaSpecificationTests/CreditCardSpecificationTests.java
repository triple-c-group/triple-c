package com.triplec.api.jpaSpecificationTests;

import com.triplec.api.domain.entities.CreditCardEntity;
import com.triplec.api.repositories.CreditCardRepository;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeAll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CreditCardSpecificationTests {
    @Autowired
    private CreditCardRepository creditCardRepository;

    private CreditCardEntity card1;
    private CreditCardEntity card2;

    @BeforeAll
    public static void init(){

    }
}
