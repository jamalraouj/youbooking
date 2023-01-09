package com.youbooking.youbooking.repository;

import com.youbooking.youbooking.entity.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
}
