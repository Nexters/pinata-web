import {BrowserRouter, Route, Routes} from 'react-router-dom'

import ROUTE from '$constants/route'
import Authenticated from '$components/auth/Authenticated'
import {FormProvider, useForm} from 'react-hook-form'
import {EventForm, ImageUrls} from '$types/Event'
import {EVENT_TYPE} from '$api/event'
import {lazy, Suspense} from 'react'
import FormGuard from '$components/auth/FormGuard'
import {DEFAULT_HIT_IMAGES, DEFAULT_MISS_IMAGES} from '$constants/formData'
import Finished from '$components/event/Finished'

const Main = lazy(() => import('$pages/Main'))
const EventLists = lazy(() => import('$pages/EventLists'))
const CreateEvent = lazy(() => import('$pages/CreateEvent'))
const EventResult = lazy(() => import('$pages/EventResult'))
const Gifts = lazy(() => import('$pages/Gifts'))
const Login = lazy(() => import('$pages/Login'))
const Event = lazy(() => import('$pages/Event'))
const ErrorPage = lazy(() => import('$pages/ErrorPage'))
const NotFoundPage = lazy(() => import('$pages/NotFoundPage'))
const CreateComplete = lazy(() => import('$pages/CreateComplete'))

export const Router = () => {
    const method = useForm<EventForm & ImageUrls>({
        mode: 'onChange',
        defaultValues: {
            type: EVENT_TYPE.RANDOM,
            hitImageUrls: DEFAULT_HIT_IMAGES,
            missImageUrls: DEFAULT_MISS_IMAGES,
            items: [],
        },
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
                            <Route path={ROUTE.EVENT.CREATE_COMPLETE} element={<FormGuard />}>
                                <Route
                                    path={`${ROUTE.EVENT.CREATE_COMPLETE}/:eventcode`}
                                    element={<CreateComplete />}
                                />
                            </Route>
                            <Route path={ROUTE.EVENT.RESULT} element={<EventResult />} />
                            <Route path={ROUTE.EVENT.OVER} element={<Finished />} />
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
