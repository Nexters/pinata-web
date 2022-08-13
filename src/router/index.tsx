import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Main from '../pages/Main'
import Event from '../pages/Event'
import EventLists from '../pages/EventLists'
import CreateEvent from '../pages/CreateEvent'
import Gifts from '../pages/Gifts'
import ROUTE from '../constants/route'
import Authenticated from '$components/auth/Authenticated'
import Login from '$pages/Login'
import ErrorPage from '$pages/ErrorPage'
import EventResult from '$pages/EventResult'
import { FormProvider, useForm } from 'react-hook-form'
import { EventForm, ImageUrls } from '$types/Event'
import { EVENT_TYPE } from '$api/event'
import { getImageSource } from '$util/imageHelper'

const DEFAULT_HIT_IMAGES = [getImageSource('example-hit-image.png')]
const DEFAULT_MISS_IMAGES = [getImageSource('example-result-card.png')]

export const Router = () => {
    const method = useForm<EventForm & ImageUrls>({
        mode: 'onSubmit',
        defaultValues: {
            type: EVENT_TYPE.RANDOM,
            hitImageUrls: DEFAULT_HIT_IMAGES,
            missImageUrls: DEFAULT_MISS_IMAGES
        }
    })

    return (
        <FormProvider {...method}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTE.MAIN} element={<Authenticated />}>
                        <Route path={ROUTE.MAIN} element={<Main />} />
                        <Route path={ROUTE.EVENT.LIST} element={<EventLists />} />
                        <Route path={ROUTE.EVENT.CREATE} element={<CreateEvent />} />
                        <Route path={ROUTE.EVENT.RESULT} element={<EventResult />} />
                        <Route path={ROUTE.GIFTS} element={<Gifts />} />
                    </Route>
                    <Route path={ROUTE.LOGIN} element={<Login />} />
                    <Route path={ROUTE.EVENT.DETAIL} element={<Event />} />
                    <Route path={ROUTE.ERROR} element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </FormProvider>
    )
}
