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

    //console.log(n * 10);
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
    //value = false;
}

namespace 構造的部分型{
    type Summary = { name: string };
    type Detail = { name: string, age: number };

    //Detail型とSummary型に同じ変数(name)があるので代入可能
    const johnDetail: Detail = { name: "john", age: 25 };
    const summary: Summary = johnDetail;

    //Detail型に変数が足りないため代入できない(ageがない)
    const johnSummary: Summary = { name: "john" };
    //const detail: Detail = johnSummary;
}

namespace 配列{
    const arrayNum = [1, 2, 3];
    const arrayTxt = ["1", "2", "3"];
}

namespace 配列方注釈{
    const arrayNum: number[] = [1, 2, 3];
    const arrayTxt: Array<string> = ["1", "2", "3"];

    console.log(arrayNum[1]);
    arrayNum[1] = 5;
    console.log(arrayNum);
    arrayNum.push(2);
    console.log(arrayNum);
}

namespace 読み取り専用配列{
    const array1: readonly number[] = [1, 2, 3];
    const array2: ReadonlyArray<string> = ["1", "2", "3"];

    //array1[1] = 5;
    //array2.push(1);
}

namespace Map型{
    const map: Map<string, number> = new Map();

    map.set("john", 23);
    //map.set(23, "john");

    const map2 = new Map();
    map2.set("john", 23);
    map2.set(23, "john");
}

namespace Mapのループ{
    const map = new Map();
    map.set("John", 23);
    map.set("Bob", 25);
    map.set("Akari", 18);
    map.set("Joge", 50);
    map.set("marin", 17);

    for(const [key, value] of map){
        console.log(`名前:${key} 年齢:${value}`);
    }
}

namespace 分割代入{
    const [a, b]: [a:number, b:number] = [1, 2];
}

namespace 残余引数{
    //残余関数の場合他の引数は設定できない？
    // function sum(...num: number[], text: string){

    // }

    function sum2(...num: number[]){
        return num.map((num1, num2) => num1 + num2);
    }

    console.log(sum2(1,2,3,4,5,6));
}

namespace クラス{
    class Person{
        name: string;
        age: number;

        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }

        getName() {
            return this.name;
        }

        getAge(){
            return this.age;
        }
    }
}

namespace ConstructorShorthand{
    class Person{
        constructor(public name:string, public age: number){}

        print(): void{
            console.log(`名前：${this.name} 年齢：${this.age}`);
        }
    }

    const person = new Person("John", 28);
    person.print();
}

namespace スタティック{
    class Person{
        name: string = "john";
        age: number = 28;

        static print(): void{
            console.log(`名前：${this.name}`);
        }
    }

    Person.print();
}

namespace 継承{
    class Animal{
        constructor(public name: string){}

        greet(): string{
            return `Hello ${this.name}`;
        }
    }

    class Dog extends Animal{
        bark(): string{
            return "woof";
        }
    }

    const dog = new Dog("max");
    console.log(dog.greet);
    console.log(dog.bark);
}

namespace 抽象クラス{
    abstract class Animal{
        constructor(public name: string){}

        abstract move(): void;

        greet(): string{
            return "Hello"
        }
    }

    class Dog extends Animal{
        move(): void {
            console.log("left");
        }

    }
}

namespace インターフェイス{
    interface Person{
        readonly name: string;
        readonly age: number;

        print(): void;
    }

    const person: Person = {
        name: "john",
        age: 28,

        print: function(){
            return `Hello My name ${this.name} My age ${this.age}`;
        }
    }

    console.log(person.print());
}

namespace ジェネリクス{
    function identity<T>(age: T): T{
        return age;
    }

    const output1 = identity<string>("myString");

    const output2 = identity<number>(28);
}

namespace Record型{
    type ThreeletterRecord = Record<"one" | "Two" | "Three", string>;
    //ThreeLetterRecord = { one: string, two: string, three: string}
}

namespace pick{
    type Person = {
        name: string;
        age: number;
        address: string;
    };

    type PersonNameNumber = Pick<Person, "name" | "age">;
    //PersonNameNumber = { name: string, age: number }
}

namespace omit{
    type Person = {
        name: string;
        age: number;
        address: string;
    };

    type PersonNameNumber = Omit<Person, "address">;
    //PersonNameNumber = { name: string, age: number }
}