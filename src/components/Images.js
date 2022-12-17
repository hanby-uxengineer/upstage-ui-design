import { useState, useMemo } from "react";
import styled from "styled-components";
import { faker } from '@faker-js/faker';
import uploadIcon from "../images/upload.png"

faker.seed(100);

const StyledImages = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const ImageUpload = styled.button`
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
  position: sticky;
  left: 0;
  border: 0;
  border-radius: 0.4rem;
  color: #717A94;
  background: #ECF1FF;
  transition: background 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background: #CCD9FF;
    transition: background 0.3s ease-in-out;
  }
`;

const ImageContainer = styled.div`
  max-width: 82rem;
  height: 10rem;
  display: flex;
  gap: 1.2rem;
  overflow: scroll;
`;

const ImageSample = styled.img`
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 0.4rem;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  background: #ECF1FF;

  :hover {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
`;

export default function Images() {
  let [sample, setSample] = useState([
    faker.image.cats(640, 480, true),
    faker.image.business(640, 480, true),
    faker.image.nature(640, 480, true),
    faker.image.technics(640, 480, true),
    faker.image.animals(640, 480, true),
    faker.image.city(640, 480, true),
    faker.image.abstract(640, 480, true),
    faker.image.transport(640, 480, true),
    faker.image.people(640, 480, true),
    faker.image.food(640, 480, true),
    faker.image.sports(640, 480, true),
  ]);

  return(
    <StyledImages>
      <ImageUpload>
        <img src={uploadIcon} style={{ width:"2.4rem", height:"2.4rem" }} /><br />
        <span style={{ fontSize: "1.2rem", fontWeight: "700" }}>Image<br />Upload</span>
      </ImageUpload>
      <ImageContainer>
        {
          sample.map((item) => 
            <ImageSample key={item} src={item} alt="faker image" loading="lazy" />
          )
        }
      </ImageContainer>
    </StyledImages>
  );
}