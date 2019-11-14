package com.huasuoworld.modle;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Table(name = "contact")
@Entity
public class Contact implements Serializable {
  private static final long serialVersionUID = 1L;

  @Id
  @Column(name = "id", insertable = false, nullable = false)
  private String id;

  @Column(name = "email")
  private String email;

  @Column(name = "image_url")
  private String imageUrl;

  @Column(name = "name")
  private String name;

  @Column(name = "phone")
  private String phone;

  
}