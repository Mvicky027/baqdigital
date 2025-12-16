# 🚀 Guía de Deployment a Vercel - BAQ+DIGITAL

## Opción 1: Deployment desde la Terminal (Recomendado)

### Paso 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Paso 2: Login a Vercel
```bash
vercel login
```

### Paso 3: Deploy
Desde el directorio del proyecto:
```bash
cd /Users/samuelgarciap/Downloads/baq-digital-prueba-main/baqdigital
vercel
```

Responde las preguntas:
- **Set up and deploy?** → Yes
- **Which scope?** → Tu cuenta personal
- **Link to existing project?** → No
- **Project name?** → baq-digital (o el que prefieras)
- **Directory?** → ./ (presiona Enter)
- **Override settings?** → No

### Paso 4: Configurar Variables de Entorno

Después del primer deploy, configura las variables:

```bash
vercel env add NEXT_PUBLIC_API_URL
# Valor: https://baq-digital.onrender.com/api/v1

vercel env add AUTH_SECRET
# Valor: (copia el valor de tu .env local)

vercel env add NEXTAUTH_URL
# Valor: (la URL que te dio Vercel, ej: https://baq-digital.vercel.app)
```

### Paso 5: Re-deploy con Variables
```bash
vercel --prod
```

---

## Opción 2: Deployment desde la Web UI

### Paso 1: Preparar Git Repository

Si aún no tienes un repositorio:

```bash
cd /Users/samuelgarciap/Downloads/baq-digital-prueba-main/baqdigital

# Inicializar git si no existe
git init

# Agregar archivos
git add .
git commit -m "feat: BAQ+DIGITAL with backend integration"

# Crear repositorio en GitHub y push
# (Sigue las instrucciones de GitHub)
```

### Paso 2: Importar en Vercel

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Click en "Import Git Repository"
3. Selecciona tu repositorio
4. Click en "Import"

### Paso 3: Configurar Build Settings

Vercel detectará automáticamente Next.js, pero verifica:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Paso 4: Agregar Variables de Entorno

En la sección "Environment Variables":

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_API_URL` | `https://baq-digital.onrender.com/api/v1` |
| `AUTH_SECRET` | (copia de tu .env) |
| `NEXTAUTH_URL` | (se configurará después del primer deploy) |
| `DATABASE_URL` | (copia de tu .env si es necesario) |
| `ENCRYPTION_KEY` | (copia de tu .env si es necesario) |

### Paso 5: Deploy

1. Click en "Deploy"
2. Espera que termine el build (~2-3 minutos)
3. Copia la URL de producción
4. Ve a Settings → Environment Variables
5. Actualiza `NEXTAUTH_URL` con la URL de producción
6. Redeploy desde la pestaña "Deployments"

---

## ⚡ Deployment Rápido (Si ya tienes Vercel CLI)

```bash
cd /Users/samuelgarciap/Downloads/baq-digital-prueba-main/baqdigital
vercel --prod
```

---

## 🔍 Verificación Post-Deployment

Después del deployment, verifica:

### 1. Landing Page
```
https://tu-dominio.vercel.app/
```
- ✅ Header se muestra correctamente
- ✅ Hero section con imágenes
- ✅ Info banner
- ✅ Alliance section
- ✅ Footer

### 2. Registro
```
https://tu-dominio.vercel.app/register
```
- ✅ Formulario funciona
- ✅ Validación funciona
- ✅ Registro exitoso redirige al dashboard

### 3. Login
```
https://tu-dominio.vercel.app/login
```
- ✅ Login funciona
- ✅ Redirige al dashboard

### 4. Dashboard
```
https://tu-dominio.vercel.app/dashboard
```
- ✅ Muestra nombre del usuario
- ✅ Cursos se muestran
- ✅ Logout funciona

---

## 🐛 Troubleshooting

### Error: "AUTH_SECRET is not defined"
**Solución**: Agrega la variable de entorno en Vercel y redeploy

### Error: "NEXTAUTH_URL is not defined"
**Solución**: Configura `NEXTAUTH_URL` con tu URL de Vercel

### Error: "Failed to fetch"
**Solución**: Verifica que `NEXT_PUBLIC_API_URL` esté correctamente configurada

### Build falla
**Solución**: 
```bash
# Prueba el build localmente primero
npm run build

# Si funciona local, verifica las variables de entorno en Vercel
```

---

## 📱 Dominios Personalizados (Opcional)

Si quieres usar un dominio personalizado:

1. Ve a Settings → Domains en Vercel
2. Agrega tu dominio
3. Configura los DNS según las instrucciones
4. Actualiza `NEXTAUTH_URL` con el nuevo dominio

---

## 🔄 Continuous Deployment

Vercel automáticamente:
- ✅ Deploya cada push a `main` → Producción
- ✅ Deploya cada PR → Preview deployment
- ✅ Ejecuta builds en paralelo
- ✅ Optimiza imágenes automáticamente

---

## 📊 Monitoreo

Después del deployment, puedes monitorear:
- **Analytics**: Visitas, performance
- **Logs**: Errores en tiempo real
- **Speed Insights**: Core Web Vitals

---

## ✅ Checklist Final

- [ ] Variables de entorno configuradas
- [ ] Build exitoso
- [ ] Landing page funciona
- [ ] Registro funciona
- [ ] Login funciona
- [ ] Dashboard funciona
- [ ] Responsive design verificado
- [ ] URL compartida con stakeholders

---

## 🎉 ¡Listo!

Tu aplicación BAQ+DIGITAL está ahora en producción y accesible desde cualquier lugar del mundo.
