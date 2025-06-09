namespace 方注釈{
    const message: string = "Hello";
    function add(x: number, y:number): number{
        return x + y;
    }

    function prirnt(text: string): void{
        console.log(text);
    }

    prirnt(message);
}

namespace 型{
    const isReady: boolean = false;
    const age: number = 27;
    const fullname: string = "Umeno koudai";
    const bigNumber: bigint = 100n;
    const uniqueSymbol: symbol = Symbol("unique");
    const notDifined: undefined = undefined;
    const empty:null = null;
}

namespace any{
    //anyは何でも代入できて値も操作できる
    const n: any = 100;
    const t: any = "test";

    console.log(n + 100);
    console.log(t + "100");
}

namespace unknown{
    //unknownは何でも代入できるが値が操作できない
    const n: unknown = 100;
    const t: unknown = "100";

    console.log(n * 10);
    console.log(t + "100");
}

namespace void型{
    //voidは関数が何も返さない場合
    function print(): void{

    }
}

namespace never型{
    //neverは決して何も返さない　エラーや無限ループの戻り値に設定される
    function print(): never{
        throw new Error
    }
}

namespace 型エイリアス{
    //既存の型を新しい形で定義する
    type StringOrNumber = string | number;
    let value: StringOrNumber;
    value = 100;
    value = "100";
    value = false;
}