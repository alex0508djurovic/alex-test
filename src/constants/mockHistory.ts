import { IHistory, ProductAction } from "@/types";
import mockProducts from "./mockProduct";

export const mockProductHistory:IHistory[] = [
    {
        timeStamp: new Date("2022-07-14T07:42:16.372Z"),
        actionType: ProductAction.Add,
        obj: mockProducts[0],
    },
    {
        timeStamp: new Date("2009-12-22T19:15:07.689Z"),
        actionType: ProductAction.Add,
        obj: mockProducts[1],
    },
    {
        timeStamp: new Date("2015-03-30T09:47:56.703Z"),
        actionType: ProductAction.Edit,
        obj: mockProducts[2],
    },
    {
        timeStamp: new Date("2001-11-13T14:22:43.458Z"),
        actionType: ProductAction.Add,
        obj: mockProducts[3],
    },
    {
        timeStamp: new Date("2019-05-10T04:03:21.784Z"),
        actionType: ProductAction.Edit,
        obj: mockProducts[4],
    },
    {
        timeStamp: new Date("2005-09-06T20:12:44.853Z"),
        actionType: ProductAction.Add,
        obj: mockProducts[5],
    },
    {
        timeStamp: new Date("2010-11-17T13:58:25.496Z"),
        actionType: ProductAction.Add,
        obj: mockProducts[6],
    },
    {
        timeStamp: new Date("2012-01-28T02:46:14.097Z"),
        actionType: ProductAction.Edit,
        obj: mockProducts[7],
    },
    {
        timeStamp: new Date("2023-05-08T16:01:33.721Z"),
        actionType: ProductAction.Add,
        obj: mockProducts[8],
    },{
        timeStamp: new Date("2021-09-01T21:29:32.311Z"),
        actionType: ProductAction.Add,
        obj: mockProducts[9],
    },

]