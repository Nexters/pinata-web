import ROUTE from '$constants/route'
import { useFormContext } from 'react-hook-form'
import {Navigate, Outlet, useParams} from 'react-router-dom'

function FormGuard() {
    const {formState: {isSubmitSuccessful}} = useFormContext()
    const params = useParams()

    if (!params.eventcode) {
        return <Navigate to={ROUTE.EVENT.CREATE} />
    }

    return isSubmitSuccessful ? <Outlet /> : <Navigate to={ROUTE.EVENT.CREATE} />
}

export default FormGuard
