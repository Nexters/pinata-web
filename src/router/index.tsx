import {BrowserRouter, Route, Routes} from 'react-router-dom'

import ROUTE from '$constants/route'
import Authenticated from '$components/auth/Authenticated'
import { FormProvider, useForm } from 'react-hook-form'
import { EventForm, ImageUrls } from '$types/Event'
import { EVENT_TYPE } from '$api/event'
import { getImageSource } from '$util/imageHelper'
import { lazy, Suspense } from 'react'

const DEFAULT_HIT_IMAGES = [getImageSource('example-hit-image.png')]
const DEFAULT_MISS_IMAGES = [getImageSource('example-result-card.png')]

const Main = lazy(() => import('$pages/Main'))
const EventLists = lazy(() => import('$pages/EventLists'))
const CreateEvent = lazy(() => import('$pages/CreateEvent'))
const EventResult = lazy(() => import('$pages/EventResult'))
const Gifts = lazy(() => import('$pages/Gifts'))
const Login = lazy(() => import('$pages/Login'))
const Event = lazy(() => import('$pages/Event'))
const ErrorPage = lazy(() => import('$pages/ErrorPage'))
const NotFoundPage = lazy(() => import('$pages/NotFoundPage'))

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
            <Suspense>
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
                        <Route path={'*'} element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </FormProvider>
    )
}
