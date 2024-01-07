import { NextResponse } from 'next/server'

export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/admin-login' 

    const isAdminPath = path.startsWith('/admin-qx')

    const token = request.cookies.get('token')?.value || ''

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/admin-qx', request.nextUrl))
    }

    if (isAdminPath && !token) {
        return NextResponse.redirect(new URL('/admin-login', request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/admin-qx',
        '/admin-qx/:path*',
        '/admin-login',
    ]
}