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
import { EventForm } from '$types/Event'

export const Router = () => {
    const method = useForm<EventForm>({
        mode: 'onSubmit'
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
