import ROUTE from '$constants/route'
import { useFormContext } from 'react-hook-form'
import {Navigate, Outlet} from 'react-router-dom'

function FormGuard() {
    const {formState: {isSubmitted}} = useFormContext()

    return isSubmitted ? <Outlet /> : <Navigate to={ROUTE.EVENT.CREATE} />
}

export default FormGuard
