import ROUTE from '$constants/route'
import { useFormContext } from 'react-hook-form'
import {Navigate, Outlet} from 'react-router-dom'

function FormGuard() {
    const {formState: {isSubmitSuccessful}} = useFormContext()

    return isSubmitSuccessful ? <Outlet /> : <Navigate to={ROUTE.EVENT.CREATE} />
}

export default FormGuard
