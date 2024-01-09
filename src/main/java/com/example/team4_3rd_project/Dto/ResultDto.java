package com.example.team4_3rd_project.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class ResultDto {
    public Boolean result;
    public String message;
    public UserDto userDto;

    public List<BoardItemDto> boardItemDtos;
}
