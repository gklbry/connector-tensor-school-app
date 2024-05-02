import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const __protectedRoutes = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/mettings(.*)',
])

export default clerkMiddleware((auth, req) => {
    if (__protectedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};