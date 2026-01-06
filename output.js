//Tue Jan 06 2026 11:34:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x5c305a = require("axios"),
  _0x38b9f7 = require("qs");
accounts = [];
function _0x1ff725(_0x43c020) {
  return new Promise(_0x342ed4 => setTimeout(_0x342ed4, _0x43c020));
}
async function _0x346051(_0x7d919b, _0x13885b) {
  const _0x5ec794 = "https://open.mishifeng.com/open/user/dailybonus",
    _0x5cb823 = {
      "token": _0x13885b,
      "platform": "wxmini",
      "channel": "h5",
      "spm": "wxmini",
      "version": "3.8.0",
      "swidth": "1920",
      "sheight": "1080",
      "lng": "121.463",
      "lat": "31.234",
      "zone_id": "21",
      "is_effective": "1"
    };
  try {
    {
      const _0x30e5d9 = await _0x5c305a.post(_0x5ec794, _0x38b9f7.stringify(_0x5cb823), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
          "Referer": "https://m.mishifeng.com/"
        }
      });
      console.log(_0x7d919b + "签到响应数据:", _0x30e5d9.data);
    }
  } catch (_0x5e1b1d) {
    console.error(_0x7d919b + "请求失败:", _0x5e1b1d.toString());
    _0x5e1b1d.response && (console.error(_0x7d919b + "响应状态:", _0x5e1b1d.response.status), console.error(_0x7d919b + "响应数据:", _0x5e1b1d.response.data));
  }
}
async function _0x17ad17(_0x4a928c, _0x4c7b35) {
  const _0x2f492e = "https://open.mishifeng.com/open/home/indexv2",
    _0x39dc62 = {
      "token": _0x4c7b35,
      "platform": "wxmini",
      "channel": "h5",
      "spm": "wxmini",
      "version": "3.8.0",
      "swidth": "1920",
      "sheight": "1080",
      "lng": "121.463",
      "lat": "31.234",
      "zone_id": "21",
      "is_effective": "1"
    };
  try {
    {
      const _0x205f49 = await _0x5c305a.get(_0x2f492e, _0x38b9f7.stringify(_0x39dc62), {
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
            "Referer": "https://m.mishifeng.com/"
          }
        }),
        _0x17b040 = _0x205f49.data;
      if (_0x17b040.errno != 0) return console.log(_0x4a928c + "获取笔记失败:", _0x17b040.errmsg), [];
      return _0x17b040.data.article.list;
    }
  } catch (_0x3ab50c) {
    console.error(_0x4a928c + "请求失败:", _0x3ab50c.toString());
    _0x3ab50c.response && (console.error(_0x4a928c + "响应状态:", _0x3ab50c.response.status), console.error(_0x4a928c + "响应数据:", _0x3ab50c.response.data));
  }
}
async function _0x1df041(_0xa2f261, _0xb02201, _0x47350c) {
  const _0x1b39bc = "https://open.mishifeng.com/open/article/createcomment";
  let _0x124bda = ["有空一定去打卡", "好吃吗？", "这家味道真不错", "口感很棒，香气扑鼻", "分量充足，性价比高", "厨师手艺一流", "环境干净，服务友好", "辣度正合适，辣味带劲", "甜品挺创意，值得一试", "汤底香浓，一口就爱上", "推荐小吃拼盘", "米饭粒粒分明", "肉质鲜嫩，汁多", "鱼香茄子做得好", "价格略高但口碑很好", "菜单丰富，选来选去不知吃啥", "窗边座位很舒服", "份量足，吃得很饱", "适合约会或聚餐，氛围好", "下次还要再来"];
  const _0x3eef7f = _0x124bda[Math.floor(Math.random() * _0x124bda.length)],
    _0x3feaef = {
      "token": _0xb02201,
      "platform": "wxmini",
      "channel": "h5",
      "spm": "wxmini",
      "version": "3.8.0",
      "swidth": "1920",
      "sheight": "1080",
      "lng": "121.463",
      "lat": "31.234",
      "zone_id": "21",
      "is_effective": "1",
      "id": _0x47350c,
      "content": _0x3eef7f
    };
  try {
    const _0x1b9787 = await _0x5c305a.post(_0x1b39bc, _0x38b9f7.stringify(_0x3feaef), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
          "Referer": "https://m.mishifeng.com/"
        }
      }),
      _0x3238c9 = _0x1b9787.data;
    if (_0x3238c9.errno != 0) {
      console.log(_0xa2f261 + "评论失败:", _0x3238c9.errmsg);
      return;
    }
    console.log("评论成功：" + _0x3238c9.data.content);
  } catch (_0x130912) {
    console.error(_0xa2f261 + "请求失败:", _0x130912.toString());
    if (_0x130912.response) {
      console.error(_0xa2f261 + "响应状态:", _0x130912.response.status);
      console.error(_0xa2f261 + "响应数据:", _0x130912.response.data);
    }
  }
}
async function _0x5a6abd(_0x11120d, _0x3eeb88, _0x29d2e7) {
  const _0x2ed609 = "https://open.mishifeng.com/open/article/togglefavorite",
    _0x49552a = {
      "token": _0x3eeb88,
      "platform": "wxmini",
      "channel": "h5",
      "spm": "wxmini",
      "version": "3.8.0",
      "swidth": "1920",
      "sheight": "1080",
      "lng": "121.463",
      "lat": "31.234",
      "zone_id": "21",
      "is_effective": "1",
      "id": _0x29d2e7
    };
  try {
    const _0x3af62e = await _0x5c305a.post(_0x2ed609, _0x38b9f7.stringify(_0x49552a), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
          "Referer": "https://m.mishifeng.com/"
        }
      }),
      _0x42e989 = _0x3af62e.data;
    if (_0x42e989.errno != 0) {
      {
        console.log(_0x11120d + "收藏失败:", _0x42e989.errmsg);
        return;
      }
    }
    console.log("收藏成功：" + _0x42e989.data.status);
  } catch (_0x4356a9) {
    {
      console.error(_0x11120d + "请求失败:", _0x4356a9.toString());
      if (_0x4356a9.response) {
        console.error(_0x11120d + "响应状态:", _0x4356a9.response.status);
        console.error(_0x11120d + "响应数据:", _0x4356a9.response.data);
      }
    }
  }
}
async function _0x206c7e(_0x489c30, _0x32ff3a, _0x3ebc66) {
  const _0x4f0fa7 = "https://open.mishifeng.com/open/article/togglelikes",
    _0x46b690 = {
      "token": _0x32ff3a,
      "platform": "wxmini",
      "channel": "h5",
      "spm": "wxmini",
      "version": "3.8.0",
      "swidth": "1920",
      "sheight": "1080",
      "lng": "121.463",
      "lat": "31.234",
      "zone_id": "21",
      "is_effective": "1",
      "id": _0x3ebc66
    };
  try {
    {
      const _0x9de8eb = await _0x5c305a.post(_0x4f0fa7, _0x38b9f7.stringify(_0x46b690), {
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
            "Referer": "https://m.mishifeng.com/"
          }
        }),
        _0x433d17 = _0x9de8eb.data;
      if (_0x433d17.errno != 0) {
        console.log(_0x489c30 + "点赞失败:", _0x433d17.errmsg);
        return;
      }
      console.log("点赞成功：" + _0x433d17.data.status);
    }
  } catch (_0x594771) {
    console.error(_0x489c30 + "请求失败:", _0x594771.toString());
    _0x594771.response && (console.error(_0x489c30 + "响应状态:", _0x594771.response.status), console.error(_0x489c30 + "响应数据:", _0x594771.response.data));
  }
}
(async () => {
  await QLAPI.getEnvs({
    "searchValue": "aqg"
  }).then(_0x410755 => {
    _0x410755.data.length > 0 ? (_0x410755 = _0x410755.data[0].value, _0x410755.split("&").forEach(_0x464aa2 => {
      if (_0x464aa2) {
        const [_0x2d6d1a, _0x32ffff] = _0x464aa2.split("#");
        accounts.push({
          "remark": _0x2d6d1a,
          "token": _0x32ffff
        });
      }
    }), console.log("加载成功" + accounts.length + "个账号")) : (console.log("未找到环境变量aqg"), process.exit());
  });
  for (i in accounts) {
    item = accounts[i];
    remark = item.remark;
    token = item.token;
    await _0x346051(remark, token);
    let _0x3fd009 = await _0x17ad17(remark, token);
    if (_0x3fd009.length > 0) {
      {
        console.log("开始评论点赞收藏");
        for (let _0x46a9a6 = 0; _0x46a9a6 < _0x3fd009.length; _0x46a9a6++) {
          item = _0x3fd009[_0x46a9a6];
          id = item.id;
          title = item.title;
          console.log("开始执行笔记：" + title);
          await _0x1df041(remark, token, id);
          await _0x5a6abd(remark, token, id);
          await _0x206c7e(remark, token, id);
          let _0xb0885d = 10000;
          console.log("延迟" + _0xb0885d + "ms执行下一任务");
          await _0x1ff725(_0xb0885d);
        }
      }
    }
  }
})();