package com.youbooking.youbooking.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Setter
@Getter
public class Client extends UserEntity{

    @OneToMany
    private List<Reservation> reservationList;


        public void addReservation(Reservation reservation){
        this.reservationList.add(reservation);
    }
}
