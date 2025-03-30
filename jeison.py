import json

# Cargar el JSON original
with open("public/champions.json", "r", encoding="utf-8") as file:
    data = json.load(file)

# Transformar los datos en un diccionario con la key como clave
cleaned_data = {
    champ["key"]: {
        "id": champ["id"],
        "name": champ["name"],
        "image": champ["image"]["full"]
    }
    for champ in data["data"].values()
}

# Guardar el JSON limpio
with open("champions_cleaned.json", "w", encoding="utf-8") as file:
    json.dump(cleaned_data, file, ensure_ascii=False, indent=4)

print("✅ Archivo JSON limpio creado: champions_cleaned.json")
