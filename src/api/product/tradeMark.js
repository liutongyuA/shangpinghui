import request from '@/utils/request'
//获取品牌列表接口
export const reqTradeMarkList = (page,limit) =>request({url:`/admin/product/baseTrademark/${page}/${limit}`,method:'get'})
//添加品牌或修改品牌接口
export const reqAddOrUpdateTradeMark = (tradeMark) =>{
    //如果参数有Id为修改
    if(tradeMark.id){
        return request({url:'/admin/product/baseTrademark/update',method: 'put', data: tradeMark})
    }else{
        return request({ url: '/admin/product/baseTrademark/save', method: 'post', data: tradeMark });
    }
}
//删除品牌
export const reqDeleteTradeMark = (id)=>request({url:`/admin/product/baseTrademark/remove/${id}`,method:'delete'});

