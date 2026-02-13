import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.p1.mobile.putong',
  name: '探探',
  groups: [
    {
      key: 2,
      name: '更新提示',
      desc: '点击[取消]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.core.newui.main.NewMainAct',
          matches:
            '@[vid="buttonDefaultNeutral"][clickable=true] > [text="取消"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2326365c-b31e-429a-9357-765d1c58da4c',
          snapshotUrls: 'https://i.gkd.li/i/14445054',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      desc: '点击[暂不设置]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.core.ui.seepage.likers.FakeLikersAct',
          matches: '[text="打开通知"] + [text="暂不设置"]',
          exampleUrls:
            'https://m.gkd.li/57941037/137e9907-9767-4acf-b803-034182346ef3',
          snapshotUrls: 'https://i.gkd.li/i/14445055',
        },
      ],
    },
    {
      key: 4,
      name: '弹窗广告（Play版）',
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="negative"]'],
          fastQuery: true,
          activityIds: ['com.p1.mobile.putong.core.newui.main.NewMainAct'],
        },
      ],
    },
    {
      key: 5,
      name: '滑动广告（Play版）',
      desc: '注意：有几率会在广告出现之前开始运作，请谨慎使用！',
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="bt_skip"]'],
          fastQuery: true,
          activityIds: ['com.p1.mobile.putong.core.newui.main.NewMainAct'],
        },
      ],
    },
    {
      key: 6,
      name: '充值 VIP 广告（Play版）',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="close"]'],
          fastQuery: true,
          activityIds: ['com.p1.mobile.putong.core.newui.main.NewMainAct'],
        },
      ],
    },
  ],
});
