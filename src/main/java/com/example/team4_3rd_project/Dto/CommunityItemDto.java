package com.example.team4_3rd_project.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CommunityItemDto {
    public String title;
    public String content;
    public List<String> images;
}
