def xss(request):
    param = request.GET.get('nickname')
    param = param.replace("<","&lt")
    param = param.replace(">","&gt")
    return HttpResponse(param)


// Filter Interface
Public class xssFilter implements Filter{
ß
        @Override
        public void init(FilterConfig filterConfig) throws ServletsException{
            // 필터 초기화
        }
        
        @Override
        public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
                throws IOException, ServletException {
    
            // 필터 함수 구현
            
            try {
                // 다음 필터 처리
                filterChain.doFilter(servletRequest, servletResponse);
            } finally {
                // 예외처리
            }
        }
        
        @Override
        public void destory(){
            // 필터 사용 끄읏
        }
      }