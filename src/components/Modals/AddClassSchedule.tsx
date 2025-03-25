import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../components/ui/select";
import { request } from "../../lib/apiManagerAdmin";

interface AddClassScheduleModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export function AddClassScheduleModal({ onClose, onSuccess }: AddClassScheduleModalProps) {
  const [formData, setFormData] = useState({
    courseId: "",
    subjectId: "",
    startDate: "",
    endDate: "",
    classTime: ""
  });
  const [courses, setCourses] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    // try {
    //   const response = await request({
    //     method: "get",
    //     path: "/courses"
    //   });
    //   setCourses(response.data.data);
    // } catch (error) {
    //   console.error("Error fetching courses:", error);
    // }
  };

  const fetchSubjects = async (courseId: string) => {
    // try {
    //   const response = await request({
    //     method: "get",
    //     path: `/subjects?courseId=${courseId}`
    //   });
    //   setSubjects(response.data.data);
    // } catch (error) {
    //   console.error("Error fetching subjects:", error);
    // }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // try {
    //   await request({
    //     method: "post",
    //     path: "/class-schedule",
    //     requestBody: formData
    //   });
    //   onSuccess();
    // } catch (error) {
    //   console.error("Error creating class schedule:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl border border-[var(--primary-border-color)]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Class Schedule</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="course">Course</Label>
              <Select
                value={formData.courseId}
                onValueChange={async (value) => {
                  setFormData({ ...formData, courseId: value, subjectId: "" });
                  await fetchSubjects(value);
                }}
              >
                <SelectTrigger>
                  {formData.courseId
                    ? courses.find(c => c.id === formData.courseId)?.course_name
                    : "Select course"}
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.course_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="module">Module</Label>
              <Select
                value={formData.subjectId}
                onValueChange={(value) => setFormData({ ...formData, subjectId: value })}
                disabled={!formData.courseId}
              >
                <SelectTrigger>
                  {formData.subjectId
                    ? subjects.find(s => s.id === formData.subjectId)?.subject_name
                    : "Select module"}
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject.id} value={subject.id}>
                      {subject.subject_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="classTime">Class Time</Label>
            <Input
              id="classTime"
              type="time"
              value={formData.classTime}
              onChange={(e) => setFormData({ ...formData, classTime: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[var(--accent)] hover:bg-[var(--accent-dark)]"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Schedule"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
