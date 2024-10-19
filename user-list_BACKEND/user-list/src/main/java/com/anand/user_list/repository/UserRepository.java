package com.anand.user_list.repository;

import com.anand.user_list.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Integer> {

}
