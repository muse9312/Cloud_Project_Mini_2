package com.groom.backend.repository;

import java.util.List;

import javax.persistence.Entity;
import javax.transaction.Transactional;

import org.springframework.data.domain.Sort;
import com.groom.backend.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface BoardRepository extends JpaRepository<Board, Long> {

    // public List <Board> findTop1ByOrderBySeqDesc(Sort sort);
   public Board findTopByOrderByViewCntDesc();


}