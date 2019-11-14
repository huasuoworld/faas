package com.huasuoworld.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import com.huasuoworld.modle.Contact;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "contacts", collectionResourceRel = "contacts")
public interface ContactRepository extends JpaRepository<Contact, String>, JpaSpecificationExecutor<Contact> {

}