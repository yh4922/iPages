! function createIpages(a, b , c) {
    b.iPage = function (data) {
        var _t = this;
        _t.elem = data.elem;
        _t.limit = data.limit || 10;
        _t.curr = data.curr || 1;
        _t.index = data.curr || 1;
        _t.count = data.count || 0;
        _t.topages = data.topages;
        _t.pages = Math.ceil(_t.count / _t.limit);
        _t.hidenum = data.hidenum || 15;
        if(_t.hidenum < 10){
            _t.hidenum = 10
        }
        _t.render = function () {
            a(_t.elem).html('');
            a(_t.elem).append('<ul></ul>');
            a(_t.elem).find('ul').append('<li class="prev"><span>上一页</span></li>');
            if (_t.curr == 1)
                a(_t.elem).find('ul li.prev').addClass('ban');
            if (_t.pages > _t.hidenum) {
                if (_t.index < 5) {
                    for (var i = 1; i <= 5; i++) {
                        a(_t.elem).find('ul').append('<li class="btn"><span>' + i + '</span></li>');
                    }
                    a(_t.elem).find('ul').append('<li class="hide xia" title="后翻5页"><span>...</span></li>');
                }
                if (_t.index >= 5 && _t.index <= _t.pages - 4) {
                    a(_t.elem).find('ul').append('<li class="hide shang" title="前翻5页"><span>...</span></li>');
                    for (var i = _t.index - 2; i <= _t.index + 2; i++) {
                        a(_t.elem).find('ul').append('<li class="btn"><span>' + i + '</span></li>');
                    }
                    a(_t.elem).find('ul').append('<li class="hide xia" title="后翻5页"><span>...</span></li>');
                }
                if (_t.index <= _t.pages && _t.index > _t.pages - 4) {
                    a(_t.elem).find('ul').append('<li class="hide shang" title="前翻5页"><span>...</span></li>');
                    for (var i = _t.pages - 4; i <= _t.pages; i++) {
                        a(_t.elem).find('ul').append('<li class="btn"><span>' + i + '</span></li>');
                    }
                }
            } else {
                for (var i = 1; i <= _t.pages; i++) {
                    a(_t.elem).find('ul').append('<li class="btn"><span>' + i + '</span></li>');
                }
            }

            a(_t.elem).find('ul').append('<li class="next"><span>下一页</span></li>');
            a(_t.elem).find('.btn').removeClass('active');
            a(_t.elem).find('li').removeClass('ban');
            a(_t.elem).find('.btn span').each(function () {
                if (parseInt(a(this).text()) == _t.index) {
                    a(this).parent("li").addClass('active');
                }
            });
            if (_t.index == 1)
                a(_t.elem).find('.prev').addClass('ban');
            if (_t.index == _t.pages)
                a(_t.elem).find('.next').addClass('ban');
            if(_t.topages){
                var isLastpage = '';
                if(_t.index ==  _t.pages){
                   isLastpage = 'ban'
                }
                a(_t.elem).find('ul').append('<li class="toLastpage '+isLastpage+'"><span>末页</span></li>');
            }
            if(_t.topages){
                var isFrontpage = '';
                if(_t.index ==  1){
                   isFrontpage = 'ban'
                }
                a(_t.elem).find('ul').prepend('<li class="toFrontpage '+isFrontpage+'"><span>首页</span></li>');
            }

        }
        if (typeof data.jump == "function") {
            _t.jump = data.jump;
        } else {
            _t.jump = function () {}
        }
        a(_t.elem).append('<ul></ul>');
        a(_t.elem).find('ul').append('<li class="prev"><span>上一页</span></li>');
        if (_t.curr == 1)
            a(_t.elem).find('ul li.prev').addClass('ban');

        if (_t.pages > _t.hidenum) {
            if (_t.curr < 5) {
                
                for (var i = 1; i <= 5; i++) {
                    var isActive = '';
                    if (_t.curr == i) isActive = 'active';
                    a(_t.elem).find('ul').append('<li class="btn ' + isActive + '"><span>' + i + '</span></li>');
                }
                a(_t.elem).find('ul').append('<li class="hide xia" title="后翻5页"><span>...</span></li>');
            }
            
            if (_t.curr >= 5 && _t.curr <= _t.pages - 4) {
                
                a(_t.elem).find('ul').append('<li class="hide shang" title="前翻5页"><span>...</span></li>');
                for (var i = _t.curr - 2; i <= _t.curr + 2; i++) {
                    var isActive = '';
                    if (_t.curr == i) isActive = 'active';
                    a(_t.elem).find('ul').append('<li class="btn ' + isActive + '"><span>' + i + '</span></li>');
                }
                a(_t.elem).find('ul').append('<li class="hide xia" title="后翻5页"><span>...</span></li>');
            }
            
            if (_t.curr <= _t.pages && _t.curr >= _t.pages - 4) {
                
                a(_t.elem).find('ul').append('<li class="hide shang" title="前翻5页"><span>...</span></li>');
                for (var i = _t.pages - 4; i <= _t.pages; i++) {
                    var isActive = '';
                    if (_t.curr == i) isActive = 'active';
                    a(_t.elem).find('ul').append('<li class="btn ' + isActive + '"><span>' + i + '</span></li>');
                }
            }
            
        } else {
            for (var i = 1; i <= _t.pages; i++) {
                var isActive = '';
                if (_t.curr == i) isActive = 'active';
                a(_t.elem).find('ul').append('<li class="btn ' + isActive + '"><span>' + i + '</span></li>');
            }
        }
        a(_t.elem).find('ul').append('<li class="next"><span>下一页</span></li>');
        if (_t.curr == _t.pages)
            a(_t.elem).find('ul li.next').addClass('ban');
        
        if(_t.topages){
            var isLastpage = '';
            if(_t.curr ==  _t.pages){
               isLastpage = 'ban'
            }
            a(_t.elem).find('ul').append('<li class="toLastpage '+isLastpage+'"><span>末页</span></li>');
        }
        if(_t.topages){
            var isFrontpage = '';
            if(_t.curr ==  1){
               isFrontpage = 'ban'
            }
            a(_t.elem).find('ul').prepend('<li class="toFrontpage '+isFrontpage+'"><span>首页</span></li>');
        }
        
        a(_t.elem).on('click', 'span', function () {
            if (a(this).parent("li").hasClass('btn')) {
                _t.index = parseInt(a(this).text())
            }
            if (a(this).parent("li").hasClass('ban')) {
                return;
            }
            if (a(this).parent("li").hasClass('next')) {
                _t.index++;
            }
            if (a(this).parent("li").hasClass('prev')) {
                _t.index--;
            }
            if (a(this).parent("li").hasClass('toLastpage ')) {
                _t.index = _t.pages;
            }
            if (a(this).parent("li").hasClass('toFrontpage')) {
                _t.index = 1;
            }
            if (a(this).parent("li").hasClass('shang')) {
                _t.index -= 5;
                if(_t.index < 1) _t.index = 1
            }
            if (a(this).parent("li").hasClass('xia')) {
                _t.index += 5;
                console.log(_t.index);
                if(_t.index > _t.pages) _t.index = _t.pages
            }
            _t.render();
            _t.jump({
                count: _t.count,
                pages: _t.pages,
                limit: _t.limit,
                index: _t.index
            },false);
        })
        _t.jump({
            count: _t.count,
            pages: _t.pages,
            limit: _t.limit,
            index: _t.index
        },true);
        return _t;
    }
    function loadCssCode(code){
        var style = document.createElement('style');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        style.appendChild(document.createTextNode(code));
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
    }
    loadCssCode('.iPages,.iPages ul li,.iPages ul li span{display:inline-block}.iPages{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.iPages ul,.iPages ul li{margin:0;padding:0;list-style:none}.iPages ul li{padding:2px}.iPages ul li span{border:1px solid #0091fc;line-height:30px;padding:0 15px;color:#0091fc;cursor:pointer}.iPages ul li.active span{background:#0091fc;color:#fff}.iPages ul li.hide{padding:0 5px;color:#666}.iPages ul li.ban span{border-color:#666;color:#666;cursor:no-drop}');
}(jQuery, window , document)

























