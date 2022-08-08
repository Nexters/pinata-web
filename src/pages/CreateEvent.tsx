import InfoCircleIcon from '$assets/icons/InfoCircleIcon';
import Flex from '$components/commons/Flex';
import { Section, SectionTitle } from '$components/commons/Section';
import LayoutWrapper from '$layout/LayoutWrapper';
import React from 'react';
import styled from 'styled-components';

const CreateEvent: React.FC = () => {
    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Container>
                <Section>
                    <SectionTitle>이벤트 제목을 입력하세요</SectionTitle>
                </Section>
                <Section marginTop={40}>
                    <SectionTitle>이벤트 진행 날짜 및 시간을 정해보세요</SectionTitle>
                </Section>
                <Section marginTop={40}>
                    <SectionTitle>이벤트 모드를 선택하세요</SectionTitle>
                </Section>
                <Section marginTop={40}>
                    <SectionTitle>당첨 상품을 등록하세요</SectionTitle>
                </Section>
                <Section marginTop={40}>
                    <SectionTitle>
                        <Flex direction='row' justifyContent={'space-between'}>
                        당첨 안내 이미지와 메시지를 등록하세요<InfoCircleIcon size={16} color={'#1b1b1e80'} />
                        </Flex>
                    </SectionTitle>
                </Section>
                <Section marginTop={40}>
                    <SectionTitle>
                        <Flex direction='row' justifyContent={'space-between'}>
                        탈락 안내 이미지와 메시지를 등록하세요<InfoCircleIcon size={16} color={'#1b1b1e80'} />
                        </Flex>
                    </SectionTitle>
                </Section>
            </Container>
        </LayoutWrapper>
    )
}

const Container = styled.div`
    padding: 30px 20px
`

export default CreateEvent;
