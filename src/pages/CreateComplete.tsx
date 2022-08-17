import Flex from '$components/commons/Flex'
import LayoutWrapper from '$layout/LayoutWrapper'
import { colors } from '$styles/colors'
import { typos } from '$styles/typos'
import { EventForm, ImageUrls } from '$types/Event'
import { getImageSource } from '$util/imageHelper'
import { useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { originUrl } from '$config/index'
import ROUTE from '$constants/route'
import useCopy from '$hooks/useCopy'

const CreateComplete = () => {
    const {getValues} = useFormContext<EventForm & ImageUrls>()
    const params = useParams()
    const eventCode = params.eventcode || ''

    const handleCopy = useCopy()

    const copyEventLink = () => {
        handleCopy(`${originUrl}${ROUTE.EVENT.DETAIL}/${eventCode}`)
    }

    const title = getValues('title')

    return (
        <LayoutWrapper isWhite={false}>
            <Container>
                <PinataImage />
                    {title}
                    <br />
                    이벤트가 개설되었습니다.
                    <Button onClick={copyEventLink}>링크 복사해서 공유하기</Button>
            </Container>
        </LayoutWrapper>
    )
}

const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 50px;
    background: ${colors.blue[100]};
    color: ${colors.white};
    ${typos.pretendard['16.19.600']};
    padding: 16px 32px;
    margin-top: 34px;
    cursor: pointer;

`

const PinataImage = styled.div`
    background: url(${getImageSource('pinata-image.png')});
    width: 181px;
    height: 129px;
    margin-bottom: 20px;
`

const Container = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})`
    color: ${colors.white};
    ${typos.pretendard['18.29.700']};
    height: calc(100vh - 60px);
    text-align: center;
`

export default CreateComplete