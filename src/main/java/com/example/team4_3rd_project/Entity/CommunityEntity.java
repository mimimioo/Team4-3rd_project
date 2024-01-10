package com.example.team4_3rd_project.Entity;

import com.example.team4_3rd_project.Dto.CommunityItemDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

@Entity
@Getter
@Setter
public class CommunityEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    public String title;
    public String content;

    public static CommunityEntity createCommunity(CommunityItemDto communityItemDto){
        CommunityEntity communityEntity = new CommunityEntity();
        communityEntity.setTitle(communityItemDto.getTitle());
        communityEntity.setContent(communityItemDto.getContent());
        return communityEntity;
    }
    public static CommunityItemDto changeToDto(CommunityEntity communityEntity) {
        ModelMapper modelMapper = new ModelMapper();

        return modelMapper.map(communityEntity, CommunityItemDto.class);
    }
}
