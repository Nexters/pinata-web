import CloseIcon from '$assets/icons/CloseIcon'
import Flex from '$components/commons/Flex'
import styled from 'styled-components'
import Badge from './Badge'

const Card = () => {
    return (
        <>
            <CardWrapper direction={'row'} justifyContent={'center'} alignItems="center">
                <CardImage>
                    <CardImageTitle>Image 설명</CardImageTitle>
                    <IconBox>
                        <CloseIcon size={26} />
                    </IconBox>
                </CardImage>
                <CardContent>
                    <Badge text={'탈락'} type="default" marginBottom={6} />
                    <CardTitle>Card</CardTitle>
                    <CardDesc>This is description in card.</CardDesc>
                    <Button>나도 이벤트 개설하러 가기</Button>
                </CardContent>
            </CardWrapper>
            <Overlay />
        </>
    )
}

const IconBox = styled.span`
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
`

const Overlay = styled.div`
    background: #000000;
    opacity: 0.2;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 480px;
    margin: 0 auto;
`

const Button = styled.button`
    border-radius: 10px;
    padding: 7px 0;
    color: #1b1b1e;
    background-color: rgba(27, 27, 30, 0.07);
    border: none;
    outline: none;
    cursor: pointer;
    height: 40px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
`

const CardDesc = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #1b1b1e;
    opacity: 0.5;
    overflow: auto;
    max-height: 75px;
`

const CardTitle = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #1b1b1e;
    margin-bottom: 6px;
`

const CardContent = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
})`
    padding: 20px;
    width: calc(100% - 40px);
    height: 205px;
    position: relative;
`

const CardImageTitle = styled.div`
    position: absolute;
    bottom: 0;
    background: rgba(122, 122, 131, 0.3);
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    width: calc(100% - 40px);
    padding: 10px 20px;
`

const CardImage = styled.div`
    background: rgba(27, 27, 30, 0.07);
    position: relative;
    height: 197px;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: url(${require('$assets/image/example-result-card.png')});
`

const CardWrapper = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
})`
    background: #fff;
    width: 335px;
    height: 402px;
    color: #1b1b1e;
    border-radius: 20px;
    z-index: 1;
`

export default Card
