import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";


const LoginPage = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="w-full max-w-md space-y-5">
				<h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
					Login
				</h2>
				<Tabs defaultValue="student" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="student">Student</TabsTrigger>
						<TabsTrigger value="security">Security</TabsTrigger>
					</TabsList>
					<TabsContent value="student">
						<p className="text-sm text-center text-gray-500 dark:text-gray-400">
							Login as a student using your Google account.
						</p>
						<div className="flex flex-col items-center justify-center p-4 space-y-4">
							<Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
								<Mail />
								Login with Google
							</Button>
						</div>
					</TabsContent>
					<TabsContent value="security">
						<p className="text-sm text-center text-gray-500 dark:text-gray-400">
							Login as a security.
						</p>
						<div className="p-4 space-y-4">
							<div className="space-y-2">
								<Label htmlFor="username">Username</Label>
								<Input id="username" type="text" placeholder="Enter your username" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input id="password" type="password" placeholder="Enter your password" />
							</div>
							<Button type="submit" className="w-full">
								Login
							</Button>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default LoginPage;
