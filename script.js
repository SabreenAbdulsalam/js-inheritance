// الكلاس الأساسي
class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// كلاس الابن (يرث من الأب)
class Child extends Parent {
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
}

// كلاس الحفيد (يرث من الابن)
class Grandchild extends Child {
    constructor(name, age, hobby) {
        super(name, age);
        this.hobby = hobby;
    }
}

console.log("تم تحميل ملف الجافاسكريبت وكلاسات الوراثة بنجاح!");
