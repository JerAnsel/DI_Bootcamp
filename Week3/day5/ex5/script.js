let family = {
    size: 5,
    race: "white",
    location: "Israel"
};

for(const key of Object.keys(family)){
    console.log(key);
}

for(const val of Object.values(family)){
    console.log(val);
}